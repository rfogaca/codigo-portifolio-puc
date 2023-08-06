import { CarroComPlaca } from "./04-definicao-carro-com-placa.mjs";
import {Locadora} from "./04-definicao-locadora.mjs";

var locadora = new Locadora()
locadora.adicionaCarro(new CarroComPlaca("ABC-8J44"))
locadora.adicionaCarro(new CarroComPlaca("DEF-1I56"))

locadora.consultaCarros()
locadora.abasteceCarro(0, 15)
locadora.consultaCarros()
locadora.abasteceCarro(1, 25)
locadora.abasteceCarro(0, 30)
locadora.consultaCarros()