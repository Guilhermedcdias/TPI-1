export default class CPF {
    private valor: string
    private dataEmissao: Date
    constructor(valor: string, dataEmissao: Date) {
        this.valor = valor
        this.dataEmissao = dataEmissao
    }
    public get getValor(): string {
        return this.valor;
    }
    public setCpf(valor: string) {
        this.valor = valor;
    }
    public get getDataEmissao(): Date {
        return this.dataEmissao;
    }
    public setDataEmissao(data: Date) {
        this.dataEmissao = data;
    }
}