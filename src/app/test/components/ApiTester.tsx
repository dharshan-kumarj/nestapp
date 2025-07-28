'use client'

import { useState } from 'react';

export function ApiTester() {
  const [getResponse, setGetResponse] = useState<any>(null);
  const [postResponse, setPostResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  
  // Form states
  const [helloParams, setHelloParams] = useState({ name: 'Dharshan', message: 'Hello' });
  const [postData, setPostData] = useState({ name: 'Dharshan', message: 'Testing POST API', customData: 'Extra info' });
  const [messageParams, setMessageParams] = useState({ name: '', type: '', limit: '5' });
  const [newMessage, setNewMessage] = useState({ name: 'Dharshan', message: '', type: 'test' });

  // Test GET /api/hello with query params
  const testHelloGet = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (helloParams.name) params.append('name', helloParams.name);
      if (helloParams.message) params.append('message', helloParams.message);
      
      const response = await fetch(`/api/hello?${params}`);
      const data = await response.json();
      setGetResponse(data);
    } catch (error) {
      setGetResponse({ error: 'Failed to fetch' });
    }
    setLoading(false);
  };

  // Test POST /api/hello with body
  const testHelloPost = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/hello', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
      });
      const data = await response.json();
      setPostResponse(data);
    } catch (error) {
      setPostResponse({ error: 'Failed to post' });
    }
    setLoading(false);
  };

  // Test GET /api/messages with query params
  const testMessagesGet = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (messageParams.name) params.append('name', messageParams.name);
      if (messageParams.type) params.append('type', messageParams.type);
      if (messageParams.limit) params.append('limit', messageParams.limit);
      
      const response = await fetch(`/api/messages?${params}`);
      const data = await response.json();
      setGetResponse(data);
    } catch (error) {
      setGetResponse({ error: 'Failed to fetch messages' });
    }
    setLoading(false);
  };

  // Test POST /api/messages
  const testMessagesPost = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMessage)
      });
      const data = await response.json();
      setPostResponse(data);
    } catch (error) {
      setPostResponse({ error: 'Failed to post message' });
    }
    setLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        API Testing Dashboard by Dharshan
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* GET Tests */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-green-600">GET Endpoints</h2>
          
          {/* Hello GET */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Test /api/hello (GET)</h3>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Name"
                value={helloParams.name}
                onChange={(e) => setHelloParams({...helloParams, name: e.target.value})}
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              />
              <input
                type="text"
                placeholder="Message"
                value={helloParams.message}
                onChange={(e) => setHelloParams({...helloParams, message: e.target.value})}
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              />
              <button
                onClick={testHelloGet}
                disabled={loading}
                className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 disabled:opacity-50"
              >
                Test Hello GET
              </button>
            </div>
          </div>

          {/* Messages GET */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Test /api/messages (GET)</h3>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Filter by name (optional)"
                value={messageParams.name}
                onChange={(e) => setMessageParams({...messageParams, name: e.target.value})}
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              />
              <input
                type="text"
                placeholder="Filter by type (optional)"
                value={messageParams.type}
                onChange={(e) => setMessageParams({...messageParams, type: e.target.value})}
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              />
              <input
                type="number"
                placeholder="Limit"
                value={messageParams.limit}
                onChange={(e) => setMessageParams({...messageParams, limit: e.target.value})}
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              />
              <button
                onClick={testMessagesGet}
                disabled={loading}
                className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 disabled:opacity-50"
              >
                Test Messages GET
              </button>
            </div>
          </div>
        </div>

        {/* POST Tests */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-blue-600">POST Endpoints</h2>
          
          {/* Hello POST */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Test /api/hello (POST)</h3>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Name"
                value={postData.name}
                onChange={(e) => setPostData({...postData, name: e.target.value})}
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              />
              <input
                type="text"
                placeholder="Message"
                value={postData.message}
                onChange={(e) => setPostData({...postData, message: e.target.value})}
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              />
              <input
                type="text"
                placeholder="Custom Data"
                value={postData.customData}
                onChange={(e) => setPostData({...postData, customData: e.target.value})}
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              />
              <button
                onClick={testHelloPost}
                disabled={loading}
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:opacity-50"
              >
                Test Hello POST
              </button>
            </div>
          </div>

          {/* Messages POST */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Test /api/messages (POST)</h3>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Name"
                value={newMessage.name}
                onChange={(e) => setNewMessage({...newMessage, name: e.target.value})}
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              />
              <input
                type="text"
                placeholder="Message"
                value={newMessage.message}
                onChange={(e) => setNewMessage({...newMessage, message: e.target.value})}
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              />
              <select
                value={newMessage.type}
                onChange={(e) => setNewMessage({...newMessage, type: e.target.value})}
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              >
                <option value="general">General</option>
                <option value="greeting">Greeting</option>
                <option value="test">Test</option>
                <option value="feedback">Feedback</option>
              </select>
              <button
                onClick={testMessagesPost}
                disabled={loading}
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:opacity-50"
              >
                Test Messages POST
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Response Display */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* GET Response */}
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
          <h3 className="font-semibold mb-2 text-green-600">GET Response:</h3>
          <pre className="text-sm bg-white dark:bg-gray-800 p-3 rounded border overflow-auto max-h-64">
            {getResponse ? JSON.stringify(getResponse, null, 2) : 'No response yet...'}
          </pre>
        </div>

        {/* POST Response */}
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
          <h3 className="font-semibold mb-2 text-blue-600">POST Response:</h3>
          <pre className="text-sm bg-white dark:bg-gray-800 p-3 rounded border overflow-auto max-h-64">
            {postResponse ? JSON.stringify(postResponse, null, 2) : 'No response yet...'}
          </pre>
        </div>
      </div>

      {/* Quick Test URLs */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Quick Test URLs (for browser):</h3>
        <div className="space-y-1 text-sm">
          <p>• <code>GET /api/hello?name=Dharshan&message=Hey</code></p>
          <p>• <code>GET /api/messages?name=Dharshan&type=greeting&limit=3</code></p>
          <p>• Use the forms above to test POST endpoints</p>
        </div>
      </div>
    </div>
  );
}
