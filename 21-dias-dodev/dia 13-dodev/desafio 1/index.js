class MeuPc{
    Tipo
    Processador
    Video
    Armazenamento
    MemoriaRam
    SSD
    constructor(Tipo, Processador, Video, Armazenamento, MemoriaRam, SSD) {
        this.Tipo = Tipo
        this.Processador = Processador 
        this.Video = Video
        this.Armazenamento = Armazenamento 
        this.MemoriaRam = MemoriaRam
        this.SSD = SSD
        }
       apresentar(){
        console.log("essas são as especoficações do meu Pc: " +
            this.Tipo +
            this.Processador + 
            this.Video + 
            this.Armazenamento +
            this.MemoriaRam +
            this.SSD)
       }
    }
let pc = new MeuPc(
  "desktop, ",
  "ryzen 5 5600G, ",
 " INTEGRADO, " ,
"240GB, " ,
"16 GB, " ,
true
)
pc.apresentar()
