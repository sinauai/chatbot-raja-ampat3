import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  // Use absolute path to questions.json in the project root
  const questionsPath = path.join(process.cwd(), 'questions.json');
  try {
    const file = await fs.readFile(questionsPath, 'utf-8');
    const data = JSON.parse(file);
    // Map to array of strings only
    const questions = data.map((q: { questions: string }) => q.questions);
    return NextResponse.json(questions);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load questions' }, { status: 500 });
  }
}
