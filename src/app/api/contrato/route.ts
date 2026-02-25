import { NextRequest, NextResponse } from 'next/server';
import { renderToBuffer } from '@react-pdf/renderer';
import { ContractPDF } from '@/lib/contract-pdf';
import { createElement } from 'react';
import fs from 'fs';
import path from 'path';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function getLogoBase64(): string | undefined {
  try {
    const logoPath = path.join(process.cwd(), 'src/assets/logo/logo-black.png');
    const buffer = fs.readFileSync(logoPath);
    return buffer.toString('base64');
  } catch {
    return undefined;
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const clientName = searchParams.get('name') ?? undefined;
    const clientCpf  = searchParams.get('cpf')  ?? undefined;
    const clientCity = searchParams.get('city')  ?? undefined;
    const tier       = searchParams.get('tier')  ?? undefined;

    const logoBase64 = getLogoBase64();

    const element = createElement(ContractPDF, {
      clientName,
      clientCpf,
      clientCity,
      tier,
      logoBase64,
    });

    const buffer = await renderToBuffer(element);

    const filename = clientName
      ? `contrato-perse-digital-${clientName.toLowerCase().replace(/\s+/g, '-')}.pdf`
      : 'contrato-perse-digital.pdf';

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="${filename}"`,
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    console.error('[contrato] PDF generation failed:', error);
    return NextResponse.json(
      { error: 'Failed to generate PDF' },
      { status: 500 },
    );
  }
}
