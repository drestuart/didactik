# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.mentor import Mentor  # noqa: E501
from swagger_server.test import BaseTestCase


class TestMentorController(BaseTestCase):
    """MentorController integration test stubs"""

    def test_add_mentor(self):
        """Test case for add_mentor

        Add a new mentor to the store
        """
        body = Mentor()
        response = self.client.open(
            '/mentor',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_delete_mentor(self):
        """Test case for delete_mentor

        Deletes a mentor
        """
        response = self.client.open(
            '/mentor/{mentorId}'.format(mentor_id=789),
            method='DELETE')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_mentor_by_id(self):
        """Test case for get_mentor_by_id

        Find mentor by ID
        """
        response = self.client.open(
            '/mentor/{mentorId}'.format(mentor_id=789),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_mentors(self):
        """Test case for get_mentors

        List all mentors
        """
        response = self.client.open(
            '/mentors',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_query_mentors(self):
        """Test case for query_mentors

        Find mentors
        """
        response = self.client.open(
            '/search',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_update_mentor(self):
        """Test case for update_mentor

        Update an existing mentor
        """
        body = Mentor()
        response = self.client.open(
            '/mentor/{mentorId}'.format(mentor_id=789),
            method='PUT',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
