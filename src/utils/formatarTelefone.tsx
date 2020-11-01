const formatarFixo = (numero: string) => {
  const regex = /^([0-9]{2})([0-9]{4,5})([0-9]{4})$/;
  var str = numero.replace(/[^0-9]/g, "").slice(0, 10);
  return str.replace(regex, "($1) $2-$3");
}

const formatarCelular = (numero: string) => {
  const regex = /^([0-9]{2})([0-9]{1})([0-9]{4,5})([0-9]{4})$/;
  var str = numero.replace(/[^0-9]/g, "").slice(0, 11);
  return str.replace(regex, "($1) $2 $3-$4");
}

export default function formatarTelefone(numero: string) {
  if (numero.length === 10) {
    return formatarFixo(numero)
  }
  return formatarCelular(numero)
}
