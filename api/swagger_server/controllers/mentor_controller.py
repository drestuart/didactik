import connexion
import six

from swagger_server.models.mentor import Mentor  # noqa: E501
from swagger_server import util


def add_mentor(body):  # noqa: E501
    """Add a new mentor to the store

    Add a new mentor to the store # noqa: E501

    :param body: Create a new mentor in the store
    :type body: dict | bytes

    :rtype: Mentor
    """
    if connexion.request.is_json:
        body = Mentor.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def add_mentor(id, username, first_name, last_name, email, phone, available_status, categories):  # noqa: E501
    """Add a new mentor to the store

    Add a new mentor to the store # noqa: E501

    :param id: 
    :type id: int
    :param username: 
    :type username: str
    :param first_name: 
    :type first_name: str
    :param last_name: 
    :type last_name: str
    :param email: 
    :type email: str
    :param phone: 
    :type phone: str
    :param available_status: 
    :type available_status: bool
    :param categories: 
    :type categories: List[str]

    :rtype: Mentor
    """
    return 'do some magic!'


def delete_mentor(mentor_id):  # noqa: E501
    """Deletes a mentor

    delete a mentor # noqa: E501

    :param mentor_id: mentor id to delete
    :type mentor_id: int

    :rtype: None
    """
    return 'do some magic!'


def get_mentor_by_id(mentor_id):  # noqa: E501
    """Find mentor by ID

    Returns a single mentor # noqa: E501

    :param mentor_id: ID of mentor to return
    :type mentor_id: int

    :rtype: Mentor
    """
    return 'do some magic!'


def get_mentors():  # noqa: E501
    """List all mentors

    List all mentors # noqa: E501


    :rtype: List[Mentor]
    """
    return 'do some magic!'


def query_mentors():  # noqa: E501
    """Find mentors

    Find mentors matching a query # noqa: E501


    :rtype: List[Mentor]
    """
    return 'do some magic!'


def update_mentor(body, mentor_id):  # noqa: E501
    """Update an existing mentor

    Update an existing mentor by Id # noqa: E501

    :param body: Update an existent mentor in the store
    :type body: dict | bytes
    :param mentor_id: ID of mentor to update
    :type mentor_id: int

    :rtype: Mentor
    """
    if connexion.request.is_json:
        body = Mentor.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def update_mentor(id, username, first_name, last_name, email, phone, available_status, categories, mentor_id):  # noqa: E501
    """Update an existing mentor

    Update an existing mentor by Id # noqa: E501

    :param id: 
    :type id: int
    :param username: 
    :type username: str
    :param first_name: 
    :type first_name: str
    :param last_name: 
    :type last_name: str
    :param email: 
    :type email: str
    :param phone: 
    :type phone: str
    :param available_status: 
    :type available_status: bool
    :param categories: 
    :type categories: List[str]
    :param mentor_id: ID of mentor to update
    :type mentor_id: int

    :rtype: Mentor
    """
    return 'do some magic!'
