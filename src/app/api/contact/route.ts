import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Campos obrigatórios não preenchidos" },
        { status: 400 }
      );
    }

    // Aqui você pode integrar com serviços de email como:
    // - Resend (https://resend.com)
    // - SendGrid
    // - Nodemailer
    // - Web3Forms (formulário HTML)

    // Por enquanto, vamos simular um envio bem-sucedido
    console.log("Contato recebido:", { name, email, phone, message });

    // Em produção, você enviaria o email aqui
    // Exemplo com Web3Forms (gratuito):
    /*
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        name,
        email,
        phone,
        message,
        subject: "Novo contato do site Ar Comfort",
      }),
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json(
        { message: "Mensagem enviada com sucesso!" },
        { status: 200 }
      );
    }
    */

    return NextResponse.json(
      {
        message:
          "Mensagem recebida! Entraremos em contato em breve. (Integração de email pendente)",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Erro ao processar solicitação" },
      { status: 500 }
    );
  }
}
