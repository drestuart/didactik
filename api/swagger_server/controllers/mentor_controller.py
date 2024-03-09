import connexion
import six
import sys

from swagger_server.models.mentor import Mentor  # noqa: E501
from swagger_server import util
from swagger_server import db


def add_mentor(body):  # noqa: E501
    """Add a new mentor to the store

    Add a new mentor to the store # noqa: E501

    :param body: Create a new mentor in the store
    :type body: dict | bytes

    :rtype: Mentor
    """

    if connexion.request.is_json:
        new_record = connexion.request.get_json()

        new_record = util.format(new_record)

        conn = db.connect()

        with conn.cursor() as cur:
            cur.execute("""
                        INSERT INTO didactik.mentors ("username", "firstName", "lastName", "email", "phone", "availableStatus", "categories")
                        VALUES (%(username)s, %(firstName)s, %(lastName)s, %(email)s, %(phone)s, %(availableStatus)s, %(categories)s)
                        RETURNING id
                        """, new_record)

            new_id = cur.fetchone()[0]

            conn.commit()

        return new_id

    return 'Invalid request', 422


def delete_mentor(mentor_id):  # noqa: E501
    """Deletes a mentor

    delete a mentor # noqa: E501

    :param mentor_id: mentor id to delete
    :type mentor_id: int

    :rtype: None
    """

    conn = db.connect()
    with conn.cursor() as cur:
        cur.execute("DELETE FROM didactik.mentors WHERE id=%s", [mentor_id])

        conn.commit()


def get_mentor_by_id(mentor_id):  # noqa: E501
    """Find mentor by ID

    Returns a single mentor # noqa: E501

    :param mentor_id: ID of mentor to return
    :type mentor_id: int

    :rtype: Mentor
    """

    with db.get_cursor() as cur:
        cur.execute("SELECT * FROM didactik.mentors WHERE id=%s", [mentor_id])
        ret = cur.fetchone()

        if ret:
            return ret
        return f'Mentor {mentor_id} not found', 404


def get_mentors():  # noqa: E501
    """List all mentors

    List all mentors # noqa: E501


    :rtype: List[Mentor]
    """

    with db.get_cursor() as cur:
        cur.execute("SELECT * FROM didactik.mentors")
        ret = cur.fetchall()

    return ret


def query_mentors(body):  # noqa: E501
    """Find mentors

    Find mentors matching a query # noqa: E501

    :param body: Array of categories to query
    :type body: dict | bytes

    :rtype: List[Mentor]
    """
    if connexion.request.is_json:
        categories = connexion.request.get_json()

        with db.get_cursor() as cur:
            cur.execute("""SELECT * FROM didactik.mentors where "categories" @> %(categories)s""", {"categories": categories})
            ret = cur.fetchall()

    return ret

def update_mentor(body, mentor_id):  # noqa: E501
    """Update an existing mentor

    Update an existing mentor by Id # noqa: E501

    :param body: Update an existing mentor in the store
    :type body: dict | bytes
    :param mentor_id: ID of mentor to update
    :type mentor_id: int

    :rtype: Mentor
    """
    if connexion.request.is_json:
        new_data = connexion.request.get_json()

        new_data = util.format(new_data)

        params = {"mentor_id": mentor_id, **new_data}

        conn = db.connect()

        with conn.cursor() as cur:
            cur.execute("""
                        UPDATE didactik.mentors SET ("username", "firstName", "lastName", "email", "phone", "availableStatus", "categories") =
                        (%(username)s, %(firstName)s, %(lastName)s, %(email)s, %(phone)s, %(availableStatus)s, %(categories)s)
                        WHERE id=%(mentor_id)s
                        RETURNING id
                        """, params)

            id = cur.fetchone()[0]

            conn.commit()

        return

    return 'Invalid request', 422


def get_suggested_categories():
    """TODO
    """

    with db.get_cursor() as cur:
        cur.execute("SELECT UNNEST(categories) as element FROM didactik.mentors GROUP BY element ORDER BY count(id) DESC LIMIT 3")
        categories = cur.fetchall()

    ret = []
    for c in categories:
        ret.append(c["element"])

    return ret
