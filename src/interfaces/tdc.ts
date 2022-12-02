export interface Tdc {
    uuid: string;
    franquicia: Franquicia;
    categoriaGeneral: string;
    imagenTarjeta: string;
    nombre: string;
    descripcion: string;
    textoCuotaInc: TextoCuotaInc;
    textoCuota: string;
    textoDescCuota: string;
    textoCuotaEnd: TextoCuotaEnd;
    textoAlertaPromo: TextoAlertaPromo;
    textoPromoCuota: string;
    destacada: boolean;
    solictable: boolean;
    listaBeneficios: Lista[];
    listaCara: Lista[];
    comparador: Comparador[];
    ocultarComparador: boolean;
    urlTarjeta: string;
    urlTarjetaSolitud: string;
    urlSvp: URLSvp;
  }
  
  export enum Comparador {
    AccesoASalasVIP = "Acceso a salas VIP",
    AsistenciaAlHogarNacional = "Asistencia al hogar (nacional)",
    AsistenciaAlVehículoNacional = "Asistencia al vehículo (nacional)",
    AsistenciasEnViajes = "Asistencias en viajes",
    SeguroDeAutoRentado = "Seguro de auto rentado",
    SeguroDeProtecciónDeCompras = "Seguro de protección de compras",
    SeguroDeProtecciónDePrecios = "Seguro de protección de precios"
  }
  
  export enum Franquicia {
    AmericanExpress = "American Express",
    Mastercard = "Mastercard",
    Visa = "Visa"
  }
  
  export interface Lista {
    bwcmtexto: string[];
    bwcmnombre: string[];
  }
  
  export enum TextoAlertaPromo {
    DescuentoDel50 = "¡Descuento del 50%!",
    Empty = "",
    ExclusivoInternet = "¡Exclusivo internet!"
  }
  
  export enum TextoCuotaEnd {
    Mensuales = "mensuales"
  }
  
  export enum TextoCuotaInc {
    CuotaDeManejo = "Cuota de manejo:"
  }
  
  export enum URLSvp {
    Empty = "",
    LinkProdAec = "link_prod_aec"
  }
  