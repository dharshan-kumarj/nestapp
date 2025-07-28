// GET endpoint for hello message
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name') || 'World';
  const message = searchParams.get('message') || 'Hello';

  return Response.json({
    success: true,
    greeting: `${message}, ${name}!`,
    timestamp: new Date().toISOString(),
    by: "Dharshan"
  });
}

// POST endpoint to send data via body
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, message, customData } = body;

    if (!name) {
      return Response.json(
        { error: "Name is required in request body" },
        { status: 400 }
      );
    }

    return Response.json({
      success: true,
      response: `Hey ${name}! Your message "${message || 'Hello'}" has been received!`,
      receivedData: body,
      processedAt: new Date().toISOString(),
      customData: customData || null,
      by: "Dharshan's API"
    }, { status: 201 });

  } catch (error) {
    return Response.json(
      { error: "Invalid JSON data" },
      { status: 400 }
    );
  }
}
