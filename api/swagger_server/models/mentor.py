# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class Mentor(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, id: int=None, username: str=None, first_name: str=None, last_name: str=None, email: str=None, phone: str=None, available_status: bool=None, categories: List[str]=None):  # noqa: E501
        """Mentor - a model defined in Swagger

        :param id: The id of this Mentor.  # noqa: E501
        :type id: int
        :param username: The username of this Mentor.  # noqa: E501
        :type username: str
        :param first_name: The first_name of this Mentor.  # noqa: E501
        :type first_name: str
        :param last_name: The last_name of this Mentor.  # noqa: E501
        :type last_name: str
        :param email: The email of this Mentor.  # noqa: E501
        :type email: str
        :param phone: The phone of this Mentor.  # noqa: E501
        :type phone: str
        :param available_status: The available_status of this Mentor.  # noqa: E501
        :type available_status: bool
        :param categories: The categories of this Mentor.  # noqa: E501
        :type categories: List[str]
        """
        self.swagger_types = {
            'id': int,
            'username': str,
            'first_name': str,
            'last_name': str,
            'email': str,
            'phone': str,
            'available_status': bool,
            'categories': List[str]
        }

        self.attribute_map = {
            'id': 'id',
            'username': 'username',
            'first_name': 'firstName',
            'last_name': 'lastName',
            'email': 'email',
            'phone': 'phone',
            'available_status': 'availableStatus',
            'categories': 'categories'
        }
        self._id = id
        self._username = username
        self._first_name = first_name
        self._last_name = last_name
        self._email = email
        self._phone = phone
        self._available_status = available_status
        self._categories = categories

    @classmethod
    def from_dict(cls, dikt) -> 'Mentor':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The Mentor of this Mentor.  # noqa: E501
        :rtype: Mentor
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self) -> int:
        """Gets the id of this Mentor.


        :return: The id of this Mentor.
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id: int):
        """Sets the id of this Mentor.


        :param id: The id of this Mentor.
        :type id: int
        """

        self._id = id

    @property
    def username(self) -> str:
        """Gets the username of this Mentor.


        :return: The username of this Mentor.
        :rtype: str
        """
        return self._username

    @username.setter
    def username(self, username: str):
        """Sets the username of this Mentor.


        :param username: The username of this Mentor.
        :type username: str
        """

        self._username = username

    @property
    def first_name(self) -> str:
        """Gets the first_name of this Mentor.


        :return: The first_name of this Mentor.
        :rtype: str
        """
        return self._first_name

    @first_name.setter
    def first_name(self, first_name: str):
        """Sets the first_name of this Mentor.


        :param first_name: The first_name of this Mentor.
        :type first_name: str
        """

        self._first_name = first_name

    @property
    def last_name(self) -> str:
        """Gets the last_name of this Mentor.


        :return: The last_name of this Mentor.
        :rtype: str
        """
        return self._last_name

    @last_name.setter
    def last_name(self, last_name: str):
        """Sets the last_name of this Mentor.


        :param last_name: The last_name of this Mentor.
        :type last_name: str
        """

        self._last_name = last_name

    @property
    def email(self) -> str:
        """Gets the email of this Mentor.


        :return: The email of this Mentor.
        :rtype: str
        """
        return self._email

    @email.setter
    def email(self, email: str):
        """Sets the email of this Mentor.


        :param email: The email of this Mentor.
        :type email: str
        """

        self._email = email

    @property
    def phone(self) -> str:
        """Gets the phone of this Mentor.


        :return: The phone of this Mentor.
        :rtype: str
        """
        return self._phone

    @phone.setter
    def phone(self, phone: str):
        """Sets the phone of this Mentor.


        :param phone: The phone of this Mentor.
        :type phone: str
        """

        self._phone = phone

    @property
    def available_status(self) -> bool:
        """Gets the available_status of this Mentor.

        Available Status  # noqa: E501

        :return: The available_status of this Mentor.
        :rtype: bool
        """
        return self._available_status

    @available_status.setter
    def available_status(self, available_status: bool):
        """Sets the available_status of this Mentor.

        Available Status  # noqa: E501

        :param available_status: The available_status of this Mentor.
        :type available_status: bool
        """

        self._available_status = available_status

    @property
    def categories(self) -> List[str]:
        """Gets the categories of this Mentor.


        :return: The categories of this Mentor.
        :rtype: List[str]
        """
        return self._categories

    @categories.setter
    def categories(self, categories: List[str]):
        """Sets the categories of this Mentor.


        :param categories: The categories of this Mentor.
        :type categories: List[str]
        """

        self._categories = categories
