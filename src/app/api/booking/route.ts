import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      address,
      serviceType,
      preferredDate,
      urgency,
      notes,
    } = body;

    // Validação básica
    if (!name || !phone || !serviceType) {
      return NextResponse.json(
        { error: "Campos obrigatórios não preenchidos" },
        { status: 400 }
      );
    }

    // Log para desenvolvimento
    console.log("Agendamento recebido:", {
      name,
      email,
      phone,
      address,
      serviceType,
      preferredDate,
      urgency,
      notes,
    });

    // Em produção, você enviaria email ou salvaria no banco de dados
    // Exemplo de mensagem para WhatsApp
    const whatsappMessage = `
      *Novo Agendamento - Ar Comfort*

      *Nome:* ${name}
      *Telefone:* ${phone}
      *Email:* ${email || "Não informado"}
      *Endereço:* ${address}
      *Serviço:* ${serviceType}
      *Data Preferencial:* ${preferredDate || "Não informada"}
      *Urgência:* ${urgency}
      *Observações:* ${notes || "Nenhuma"}
    `.trim();

    console.log("Mensagem para WhatsApp:", whatsappMessage);

    return NextResponse.json(
      {
        message:
          "Agendamento recebido! Entraremos em contato para confirmar. (Integração de email pendente)",
        whatsappMessage,
      },
      { status: 200 }
    );
  } catch (_error) {
    return NextResponse.json(
      { error: "Erro ao processar agendamento" },
      { status: 500 }
    );
  }
}
