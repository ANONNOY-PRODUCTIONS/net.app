const overall = () => {
  const bangla = document.getElementById('bengali').value
  const english = document.getElementById('english').value
  const math = document.getElementById('math').value
  const science = document.getElementById('Sceince').value
  const BGS = document.getElementById('BGS').value
  const reli = document.getElementById('reli').value

  var bang = parseInt(bangla)
  var eng = parseInt(english)
  var ma = parseInt(math)
  var sci = parseInt(science)
  var som = parseInt(BGS)
  var rel = parseInt(reli)

  var b = ''
  var e = ''
  var m = ''
  var s = ''
  var bajaj = ''
  var r = ''

  if (bang >= 90) {
    b = 'A+ with the number of ' + bang
  } else if (bang >= 80) {
    b = 'A with the number of ' + bang
  } else if (bang >= 70) {
    b = 'A- with the number of ' + bang
  } else if (bang >= 60) {
    b = 'B with the number of ' + bang
  } else if (bang >= 50) {
    b = 'C+ with the number of ' + bang
  } else {
    b = 'F (Fail) with the number of ' + bang
  }

  if (eng >= 90) {
    e = 'A+ with the number of ' + eng
  } else if (eng >= 80) {
    e = 'A with the number of ' + eng
  } else if (eng >= 70) {
    e = 'A- with the number of ' + eng
  } else if (eng >= 60) {
    e = 'B with the number of ' + eng
  } else if (eng >= 50) {
    e = 'C+ with the number of ' + eng
  } else {
    e = 'F (Fail) with the number of ' + eng
  }

  if (ma >= 90) {
    m = 'A+ with the number of ' + ma
  } else if (ma >= 80) {
    m = 'A with the number of ' + ma
  } else if (ma >= 70) {
    m = 'A- with the number of ' + ma
  } else if (ma >= 60) {
    m = 'B with the number of ' + ma
  } else if (ma >= 50) {
    m = 'C+ with the number of ' + ma
  } else {
    m = 'F (Fail) with the number of ' + ma
  }

  if (sci >= 90) {
    s = 'A+ with the number of ' + sci
  } else if (sci >= 80) {
    s = 'A with the number of ' + sci
  } else if (sci >= 70) {
    s = 'A- with the number of ' + sci
  } else if (sci >= 60) {
    s = 'B with the number of ' + sci
  } else if (sci >= 50) {
    s = 'C+ with the number of ' + sci
  } else {
    s = 'F (Fail) with the number of ' + sci
  }

  if (som >= 90) {
    bajaj = 'A+ with the number of ' + som
  } else if (som >= 80) {
    bajaj = 'A with the number of ' + som
  } else if (som >= 70) {
    bajaj = 'A- with the number of ' + som
  } else if (som >= 60) {
    bajaj = 'B with the number of ' + som
  } else if (som >= 50) {
    bajaj = 'C+ with the number of ' + som
  } else {
    bajaj = 'F (Fail) with the number of ' + som
  }

  if (rel >= 90) {
    r = 'A+ with the number of ' + rel
  } else if (rel >= 80) {
    r = 'A with the number of ' + rel
  } else if (rel >= 70) {
    r = 'A- with the number of ' + rel
  } else if (rel >= 60) {
    r = 'B with the number of ' + rel
  } else if (rel >= 50) {
    r = 'C+ with the number of ' + rel
  } else {
    r = 'F (Fail) with the number of ' + rel
  }

  document.write('<h1>Dhaka Residential Model College</h1>')
  document.write('Mohammadpur,Dhaka -1207')
  document.write('<br><br><br><br><br><br><br><br>')
  document.write('<h1>Result here</h1><br><br><br?')
  document.write('In Bangla: ' + b)
  document.write('<br>')
  document.write('In English: ' + e)
  document.write('<br>')
  document.write('In Math: ' + m)
  document.write('<br>')
  document.write('In Science: ' + s)
  document.write('<br>')
  document.write('In BGS: ' + bajaj)
  document.write('<br>')
  document.write('In Religion: ' + r)
  document.write('<br><br><br><br><br><br><br><br>')
  document.write('<hr>')
  document.write('Class teacher<br>')
  document.write('Over all number : ', bang + eng + ma + sci + som + rel)
}
