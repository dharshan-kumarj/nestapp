// In-memory storage for messages (use database in production)
let messages: Array<{
  id: number;
  name: string;
  message: string;
  type: string;
  timestamp: string;
}> = [
  {
    id: 1,
    name: "Dharshan",
    message: "Welcome to my Next.js API!",
    type: "greeting",
    timestamp: new Date().toISOString()
  }
];

// GET endpoint with query parameters
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  // Extract query parameters
  const name = searchParams.get('name');
  const type = searchParams.get('type');
  const limit = parseInt(searchParams.get('limit') || '10');
  
  let filteredMessages = [...messages];
  
  // Filter by name if provided
  if (name) {
    filteredMessages = filteredMessages.filter(msg => 
      msg.name.toLowerCase().includes(name.toLowerCase())
    );
  }
  
  // Filter by type if provided
  if (type) {
    filteredMessages = filteredMessages.filter(msg => 
      msg.type.toLowerCase() === type.toLowerCase()
    );
  }
  
  // Limit results
  filteredMessages = filteredMessages.slice(0, limit);
  
  return Response.json({
    success: true,
    messages: filteredMessages,
    total: messages.length,
    filtered: filteredMessages.length,
    filters: { name, type, limit },
    by: "Dharshan"
  });
}

// POST endpoint to add new message
export async function POST(request: Request) {
  try {
    const { name, message, type = "general" } = await request.json();
    
    if (!name || !message) {
      return Response.json(
        { error: "Name and message are required" },
        { status: 400 }
      );
    }
    
    const newMessage = {
      id: messages.length + 1,
      name,
      message,
      type,
      timestamp: new Date().toISOString()
    };
    
    messages.push(newMessage);
    
    return Response.json({
      success: true,
      message: "Message added successfully!",
      data: newMessage,
      totalMessages: messages.length
    }, { status: 201 });
    
  } catch (error) {
    return Response.json(
      { error: "Invalid JSON data" },
      { status: 400 }
    );
  }
}
