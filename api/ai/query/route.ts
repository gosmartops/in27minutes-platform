import { NextResponse } from 'next/server';
// In a real monorepo, these would be imported from the ai-orchestrator lib or via HTTP
// For this simulation, we'll reference the service logic directly

export async function POST(request: Request) {
  const { user_id, message } = await request.json();

  // 1. Forward to AI Orchestrator (NestJS)
  // In production: const response = await fetch('http://nestjs-ai-service/query', ...)
  
  // Simulated Orchestration Flow
  const intent = {
    product: "iPhone 13",
    budget: 500000,
    location: "Lagos",
    urgency: "high"
  };

  const results = [
    {
      product_id: "p1",
      merchant_id: "m1",
      price: 495000,
      eta_minutes: 22,
      reason: "Closest merchant, high stock, top-rated"
    }
  ];

  return NextResponse.json({
    intent,
    results,
    explanation: "Best option near you within 27-minute delivery window"
  });
}
