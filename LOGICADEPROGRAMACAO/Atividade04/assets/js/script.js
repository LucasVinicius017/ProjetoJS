function CalcularIR(basePrm)
{
    if (typeof basePrm !== 'number' || !isFinite(basePrm) || basePrm < 0) 
        {
            throw new Error("Base inválida. Informe um número >= 0.");
        }

    // Normaliza para 2 casas (caso venha com muitas casas decimais)
    const baseClc = Math.round(basePrm * 100) / 100;
    
    let aliquota = 0;
    let deducao = 0;
    let faixa = "Isento";

    switch (true) 
    {
        case baseClc <= 2428.80:
            aliquota = 0.00;
            deducao = 0.00;
            faixa = "Até 2.428,81";
            break;
    } 