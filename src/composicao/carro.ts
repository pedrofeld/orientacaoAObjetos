export class Carro {
    private motor: Motor;

    constructor(public modelo: string, potenciaMotor: number, tipoMotor: string = "Combustão") {
        this.motor = new Motor(potenciaMotor, tipoMotor);
    }

    ligarCarro(): string {
        return `${this.modelo}: ${this.motor.ligar()}`;
    }

    getInfoMotor(): string {
        return this.motor.getInfo();
    }
}

class Motor {
    private potencia: number;
    private tipo: string;

    constructor(potencia: number, tipo: string = "Combustão") {
        this.potencia = potencia;
        this.tipo = tipo;
    }

    ligar(): string {
        return `Motor ligado (${this.tipo}) com potência de ${this.potencia}cv`;
    }

    getInfo(): string {
        return `Potência: ${this.potencia}cv, Tipo: ${this.tipo}`;
    }
}