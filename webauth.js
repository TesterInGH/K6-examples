import http from 'k6/http';
import encoding from 'k6/encoding';

export default function () {

  // send custom payload/post data
  const payload = JSON.stringify({
      user: 'testuser',
      password: 'bbb',
  });

  // encrypt your credentials in base64 format
  const encodedCredentials = encoding.b64encode("username:password");

 // send post request with custom header and payload
  http.post('http://yoururl.com/endpoint', payload, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${encodedCredentials}`,
    },
  });
}
