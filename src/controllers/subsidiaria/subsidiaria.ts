import Empresa from "../../models/empresa";

export default class subsidiaria{
    private empresas: Array<Empresa>

    constructor(){
        this.empresas = []
    }


    public get getEmpresas(){
        return this.empresas;

    }
    public addSubsid(empresa: Empresa){
        this.empresas.push(empresa)
        console.log("Adicionada")
    }

}