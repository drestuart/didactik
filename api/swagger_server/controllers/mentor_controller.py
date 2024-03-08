import connexion
import six

from swagger_server.models.mentor import Mentor  # noqa: E501
from swagger_server import util

mentorStore = [
    Mentor(1, 'dstu', 'Dan', 'Stuart', 'drestuart@gmail.com', '987-654-3210', True, ['Python', 'Typescript']),
    Mentor(2, 'GvR_bdfl', 'Guido', 'van Rossum', 'GvR_bdfl@python.org', '+1 123-456-7890', False, ['Python']),
    Mentor(3, 'lt', 'Linus', 'Torvalds', 'linus@kernel.org', '987-654-3210', True, ['C', 'Linux']),
]

def add_mentor(body):  # noqa: E501
    """Add a new mentor to the store

    Add a new mentor to the store # noqa: E501

    :param body: Create a new mentor in the store
    :type body: dict | bytes

    :rtype: Mentor
    """
    if connexion.request.is_json:
        body = Mentor.from_dict(connexion.request.get_json())  # noqa: E501
        print(body)
        mentorStore.append(body)
    return body


def delete_mentor(mentor_id):  # noqa: E501
    """Deletes a mentor

    delete a mentor # noqa: E501

    :param mentor_id: mentor id to delete
    :type mentor_id: int

    :rtype: None
    """

    deleted = False

    for m in mentorStore:
        if m.id == mentor_id:
            mentorStore.remove(m)
            deleted = True
            break

    if deleted:
        return
    return f'Mentor {mentor_id} not found', 404


def get_mentor_by_id(mentor_id):  # noqa: E501
    """Find mentor by ID

    Returns a single mentor # noqa: E501

    :param mentor_id: ID of mentor to return
    :type mentor_id: int

    :rtype: Mentor
    """

    ret = None

    for m in mentorStore:
        if m.id == mentor_id:
            ret = m
            break

    if ret:
        return ret
    return f'Mentor {mentor_id} not found', 404


def get_mentors():  # noqa: E501
    """List all mentors

    List all mentors # noqa: E501


    :rtype: List[Mentor]
    """

    return mentorStore

# TODO
def query_mentors():  # noqa: E501
    """Find mentors

    Find mentors matching a query # noqa: E501


    :rtype: List[Mentor]
    """
    return 'do some magic!'

# TODO
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
        body = connexion.request.get_json()  # noqa: E501

        replaced = False

        for m in mentorStore:
            if m.id == mentor_id:
                for k, v in body.items():
                    print(k, v)
                    # m[k] = v # TODO

                replaced = True
                break

        if replaced:
            return body
        return f'Mentor {mentor_id} not found', 404

    return 'Invalid request', 422
