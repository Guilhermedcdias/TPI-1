import Cliente from "../../models/cliente"
import Entrada from "../../utils/entrada"
import Update from "../update"

export default class UpdateCliente extends Update {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public update(cli_cpf: string): void {
        this.clientes.filter(cli => {
            console.log("------------------------------------------\n\n")
            let result = cli.getCpf.getValor == cli_cpf
            if (result) {
                console.log("Cliente encontrado, vamos Atualizar:")
                console.log("1 -  Se deseja Alterar o Nome.")
                console.log("2 -  Se deseja Alterar o Nome Social.")
                console.log("3 -  Se deseja Alterar o CPF.")
                console.log("4 -  Se deseja Alterar algum RG.")
                console.log("5 -  Se deseja Alterar algum Telefone.")
                console.log("0 -  Se não deseja alterar nada.")
                console.log("------------------------------------------\n\n")

                let entrada = new Entrada()
                let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

                switch (opcao) {
                    case 1:
                        cli.nome = entrada.receberTexto(`Insira novo nome: `)
                        console.log("------------------------------------------\n\n")

                        break;
                    case 2:
                        cli.nomeSocial = entrada.receberTexto(`Insira o novo nome social: `)
                        console.log("------------------------------------------\n\n")

                        break;
                    case 3:
                        let data = entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
                        let partesData = data.split('/')
                        let ano = new Number(partesData[2].valueOf()).valueOf()
                        let mes = new Number(partesData[1].valueOf()).valueOf()
                        let dia = new Number(partesData[0].valueOf()).valueOf()
                        let dataEm = new Date(ano, mes, dia)
                        let valor = entrada.receberTexto('Insira o novo CPF: ')
                        cli.setCpf(valor, dataEm)
                        console.log("------------------------------------------\n\n")

                        break;
                    case 4:
                        if (cli.getRgs.length === 0) {
                            console.log(`Sem Rgs Cadastrados para esse cliente...`)
                            console.log(`Deseja cadastrar um RG?`)
                            let op = entrada.receberNumero(`Digite\n 1 -- Para Cadastrar -- \n 2 -- Para Não Cadastrar --\n\n`)
                            switch (op) {
                                case 1:
                                    let valor = entrada.receberTexto("Insira o RG: ")
                                    let data = entrada.receberTexto("Insira a data de emissão usando o formato dd/mm/aaaa")
                                    let partesData = data.split('/')
                                    let ano = new Number(partesData[2].valueOf()).valueOf()
                                    let mes = new Number(partesData[1].valueOf()).valueOf()
                                    let dia = new Number(partesData[0].valueOf()).valueOf()
                                    let dataEm = new Date(ano, mes, dia)
                                    cli.addRG(valor, dataEm);
                                    break;
                                case 2:
                                    console.log('Obrigado por Utilizar o sistema')
                                    break
                                default:
                                    console.log(`Operação não entendida :(`)
                            }
                        } else {
                            let cont = 0
                            cli.getRgs.forEach(rg => {
                                console.log(cont, " - ", rg.getValor);
                                cont++
                            })
                            let op = entrada.receberNumero("Digite o numero correpondente ao rg que deseja alterar ou digite 9999 para cadastrar um novo RG.")
                            if (op == 9999) {
                                let valor = entrada.receberTexto("Insira o RG: ")
                                let data = entrada.receberTexto("Insira a data de emissão usando o formato dd/mm/aaaa")
                                let partesData = data.split('/')
                                let ano = new Number(partesData[2].valueOf()).valueOf()
                                let mes = new Number(partesData[1].valueOf()).valueOf()
                                let dia = new Number(partesData[0].valueOf()).valueOf()
                                let dataEm = new Date(ano, mes, dia)
                                cli.addRG(valor, dataEm);
                            } else {
                                if (op < cli.getRgs.length && op >= 0) {
                                    let aa = cli.getRgs[op]
                                    let valor = entrada.receberTexto("Insira o novo RG: ")
                                    let data = entrada.receberTexto("Insira a data de emissão usando o formato dd/mm/aaaa")
                                    let partesData = data.split('/')
                                    let ano = new Number(partesData[2].valueOf()).valueOf()
                                    let mes = new Number(partesData[1].valueOf()).valueOf()
                                    let dia = new Number(partesData[0].valueOf()).valueOf()
                                    let dataEm = new Date(ano, mes, dia)
                                    cli.setRgs(aa, valor, dataEm)
                                } else {
                                    console.log("Invalido...")
                                }
                            }
                        }
                        console.log("------------------------------------------\n\n")

                        break;
                    case 5:
                        if (cli.getTelefones.length === 0) {
                            console.log(`Sem telefones cadastrados...`)
                            console.log(`Deseja cadastrar um telefone?`)
                            let op = entrada.receberNumero("Escolha:\n\n1 -- Para Cadastrar --\n\n2 -- Para Não Cadastrar --\n\n")
                            switch (op) {
                                case 1:
                                    let ddd = entrada.receberTexto("Insira o DDD: ")
                                    let tel = entrada.receberTexto("Insira o numero de telefone que será cadastrado: ")
                                    cli.addPhone(ddd, tel)
                                    console.log("------------------------------------------\n\n")

                                    break;
                                case 2:
                                    console.log('Obrigado por Utilizar o sistema')
                                    break;
                                default:
                                    console.log("Escolha opção Válida...\n\n")
                            }

                        } else {
                            let cont = 0;
                            cli.getTelefones.forEach(tel => {
                                console.log(cont, " - (", tel.getDdd, ") ", tel.getNumero)
                                cont++
                            });
                            let op = entrada.receberNumero("Insira o Numero da opção que você deseja ou 9999 para cadastrar um novo: ");
                            if (op >= 0 && cli.getTelefones.length > op) {
                                let alter = cli.getTelefones[op];
                                let ddd = entrada.receberTexto("Insira o novo DDD: ");
                                let num = entrada.receberTexto("Insira o numero: ");
                                alter.setDdd(ddd)
                                alter.setNumero(num)
                            } else if (op == 9999) {
                                let ddd = entrada.receberTexto("Insira o DDD: ")
                                let numero = entrada.receberTexto("Insira o Numero: ")
                                cli.addPhone(ddd, numero)
                            } else {
                                console.log("Invalido...")
                            }
                        }
                        break;
                    case 0:
                        break;
                    default:
                        console.log(`Operação não entendida :(`)
                }
            } else {
                console.log("Cliente não existe no sistema")
            }
        })
    }

}