function filtrar(lista, filCr, filHp, finType){
    for (const key in lista){

    }
    const filtred = lista.filter((key) =>{
        return key.cr >= filCr && key.hp >= filHp
    });
    const finded = lista.find((key) => {
        return key.type === finType && key.cr >= 6
    });
}