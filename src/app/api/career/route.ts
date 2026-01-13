import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, position, experience, message } = body;

    // Validação básica
    if (!name || !email || !phone || !position) {
      return NextResponse.json(
        { error: "Campos obrigatórios não preenchidos" },
        { status: 400 }
      );
    }

    // Log para desenvolvimento
    console.log("Candidatura recebida:", {
      name,
      email,
      phone,
      position,
      experience,
      message,
    });

    // Em produção, você enviaria para o RH ou salvaria no banco de dados

    return NextResponse.json(
      {
        message:
          "Candidatura recebida! Analisaremos seu perfil e retornaremos em breve. (Integração de email pendente)",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Erro ao processar candidatura" },
      { status: 500 }
    );
  }
}
