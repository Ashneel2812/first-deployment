import unittest
from app import app

class FlaskTestCase(unittest.TestCase):

    def setUp(self):
        self.client = app.test_client()

    def test_home(self):
        response = self.client.get("/")
        self.assertEqual(response.status_code, 200)
        self.assertIn(b"Hello, World from Flask!", response.data)

if __name__ == "__main__":
    unittest.main()