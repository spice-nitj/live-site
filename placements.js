const output = document.getElementById('output')
const url = 'https://docs.google.com/spreadsheets/d/'
const ssid = '15TNwkaBb1ykRA3sWBu8nSq0UOA4m_jgsC-2CRQfgmzQ'
const q1 = '/gviz/tq?'
const q2 = 'tqx=out:json'

window.addEventListener('DOMContentLoaded', getData)

function getData() {
  let url1 = `${url}${ssid}${q1}&${q2}`

  fetch(url1)
    .then((res) => res.text())
    .then((data) => {
      console.log(data)
      const json = JSON.parse(data.substr(47).slice(0, -2))
      const rows = json.table.rows.slice(1)
      console.log(rows)
      renderData(rows)
    })
}

function renderData(rows) {
  rows
    .forEach((row) => {
      const cell = row.c
      const name = cell[0].v
      const company = cell[1].v
      const package = cell[2].v

      const tableRow = document.createElement('tr')
      const nameCell = document.createElement('td')
      const companyCell = document.createElement('td')
      const packageCell = document.createElement('td')

      nameCell.textContent = name
      companyCell.textContent = company
      packageCell.textContent = package

      tableRow.appendChild(nameCell)
      tableRow.appendChild(companyCell)
      tableRow.appendChild(packageCell)

      output.appendChild(tableRow)
    })
    .catch((err) => console.log(err))
}
