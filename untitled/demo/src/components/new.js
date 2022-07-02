Ануар, [15.03.2022 12:46]
function setTable(company) {
    const body = document
        .querySelector("iframe")
        .contentDocument.querySelector("body");
    let [day, month, year] = company.deadline.split(".");
    let tariffPlan = getTariffPlan(company);
    if (day === "01") {
        body.innerHTML = createTableFirtsDay(company, tariffPlan);
    } else {
        body.innerHTML = createTableMiddleDay(company, tariffPlan);
    }
    return true;
}

function createTableFirtsDay(company, tariff) {
    let table = ` 
  <table 
    border="0" 
    cellpadding="0" 
    cellspacing="0" 
    style="width: 451px" 
    class="cke_show_border" 
  > 
    <tbody> 
      <tr> 
        <td colspan="2" style="height: 34px; width: 354px"> 
          Please set a new tariff for ${company.ticname}&nbsp;from ${company.deadline}: 
        </td> 
        <td style="width: 96px"><br /></td> 
      </tr> 
      <tr> 
        <td style="height: 34px; width: 186px">Direction</td> 
        <td style="width: 169px">Tariff, incl. VAT</td> 
        <td style="width: 96px">Charging interval</td> 
      </tr> 
      <tr> 
        <td style="height: 20px; width: 186px">Service fee*</td> 
        <td style="width: 169px">${company.serviceFee}</td> 
        <td style="width: 96px">monthly</td> 
      </tr> 
      <tr> 
        <td style="height: 20px; width: 186px">Monthly fee</td> 
        <td style="width: 169px">${tariff.monthlyFee}</td> 
        <td style="width: 96px">monthly</td> 
      </tr> 
      <tr> 
        <td style="height: 20px; width: 186px">Kcell, Activ</td> 
        <td style="width: 169px">${tariff.kcellActiv}</td> 
        <td style="width: 96px">1 sec</td> 
      </tr> 
      <tr> 
        <td style="height: 20px; width: 186px">CUG</td> 
        <td style="width: 169px">0</td> 
        <td style="width: 96px">1 sec</td> 
      </tr> 
      <tr> 
        <td style="height: 20px; width: 186px">Other mobile operators</td> 
        <td style="width: 169px">${tariff.othermobileoper}</td> 
        <td style="width: 96px">1 sec</td> 
      </tr> 
      <tr> 
        <td style="height: 20px; width: 186px">Fixed network</td> 
        <td style="width: 169px">15</td> 
        <td style="width: 96px">1 sec</td> 
      </tr> 
      <tr> 
        <td style="height: 20px; width: 186px">International</td> 
        <td style="width: 169px">${company.inter}</td> 
        <td style="width: 96px">1 sec</td> 
      </tr> 
      <tr> 
        <td colspan="2" style="height: 20px; width: 354px"> 
          <p>*Service fee is not related to traffic</p> 
          <p> 
            **Monthly fee includes free bonus minutes ${tariff.bonusMins} min and includes minutes 
            of onnet, offnet 
          </p> 
          <div><br /></div> 
        </td> 
      </tr> 
    </tbody> 
  </table> 
  `;
    return table;
}

function createTableMiddleDay(company, tariff) {
    const [day, month, year] = company.deadline.split(".");
    let lastDay = new Date(+year, +month, 0).getDate();
    let lastDate = lastDay + "." + month + "." + year;

    let monthlyFee =
        (parseInt(tariff.monthlyFee) / parseInt(lastDay)) *
        (parseInt(lastDay) - parseInt(day) + 1);
    monthlyFee = Math.round(monthlyFee * 100) / 100;

    let nextMonth = new Date(+year, +month, 1).toLocaleDateString("ru");
    let table = ` 
    <table 
  border="0" 
  cellpadding="0" 
  cellspacing="0" 
  style="width: 451px" 
  class="cke_show_border" 
> 
  <tbody> 
    <tr> 
      <td colspan="3" style="height: 34px; width: 451px"> 
        To set the following tariffs for&nbsp; ${company.ticname} contract from 
        ${company.deadline} to ${lastDate}: 
      </td> 
    </tr> 
    <tr> 
      <td style="height: 34px; width: 186px">Direction</td> 
      <td style="width: 169px">Tariff, incl. VAT</td> 
      <td style="width: 96px">Charging interval</td> 
    </tr> 
    <tr> 
      <td style="height: 34px; width: 186px">Service fee *</td> 
      <td style="width: 169px">${company.serviceFee}</td> 
      <td style="width: 96px">monthly</td> 
    </tr> 
    <tr> 
      <td style="height: 20px; width: 186px">Monthly fee</td>

Ануар, [15.03.2022 12:46]
<td style="width: 169px">${monthlyFee}</td> 
      <td style="width: 96px">monthly</td> 
    </tr> 
    <tr> 
      <td style="height: 20px; width: 186px">Kcell, Activ</td> 
      <td style="width: 169px">${tariff.kcellActiv}</td> 
      <td style="width: 96px">1 sec</td> 
    </tr> 
    <tr> 
      <td style="height: 20px; width: 186px">CUG</td> 
      <td style="width: 169px">0</td> 
      <td style="width: 96px">1 sec</td> 
    </tr> 
    <tr> 
      <td style="height: 20px; width: 186px">Other mobile operators</td> 
      <td style="width: 169px">${tariff.othermobileoper}</td> 
      <td style="width: 96px">1 sec</td> 
    </tr> 
    <tr> 
      <td style="height: 20px; width: 186px">Fixed network</td> 
      <td style="width: 169px">15</td> 
      <td style="width: 96px">1 sec</td> 
    </tr> 
    <tr> 
      <td style="height: 20px; width: 186px">International</td> 
      <td style="width: 169px">${company.inter}</td> 
      <td style="width: 96px">1 sec</td> 
    </tr> 
    <tr> 
      <td style="height: 20px; width: 186px"><br /></td> 
      <td style="width: 169px"><br /></td> 
      <td style="width: 96px"><br /></td> 
    </tr> 
    <tr> 
      <td colspan="2" style="height: 34px; width: 354px"> 
        Please set a new tariff for ${company.ticname}&nbsp;from ${nextMonth}: 
      </td> 
      <td style="width: 96px"><br /></td> 
    </tr> 
    <tr> 
      <td style="height: 34px; width: 186px">Direction</td> 
      <td style="width: 169px">Tariff, incl. VAT</td> 
      <td style="width: 96px">Charging interval</td> 
    </tr> 
    <tr> 
      <td style="height: 20px; width: 186px">Service fee*</td> 
      <td style="width: 169px">${company.serviceFee}</td> 
      <td style="width: 96px">monthly</td> 
    </tr> 
    <tr> 
      <td style="height: 20px; width: 186px">Monthly fee</td> 
      <td style="width: 169px">${tariff.monthlyFee}</td> 
      <td style="width: 96px">monthly</td> 
    </tr> 
    <tr> 
      <td style="height: 20px; width: 186px">Kcell, Activ</td> 
      <td style="width: 169px">${tariff.kcellActiv}</td> 
      <td style="width: 96px">1 sec</td> 
    </tr> 
    <tr> 
      <td style="height: 20px; width: 186px">CUG</td> 
      <td style="width: 169px">0</td> 
      <td style="width: 96px">1 sec</td> 
    </tr> 
    <tr> 
      <td style="height: 20px; width: 186px">Other mobile operators</td> 
      <td style="width: 169px">${tariff.othermobileoper}</td> 
      <td style="width: 96px">1 sec</td> 
    </tr> 
    <tr> 
      <td style="height: 20px; width: 186px">Fixed network</td> 
      <td style="width: 169px">15</td> 
      <td style="width: 96px">1 sec</td> 
    </tr> 
    <tr> 
      <td style="height: 20px; width: 186px">International</td> 
      <td style="width: 169px">${company.inter}</td> 
      <td style="width: 96px">1 sec</td> 
    </tr> 
    <tr> 
      <td colspan="2" style="height: 20px; width: 354px"> 
        <p>*Service fee is not related to traffic</p> 
        <p> 
          **Monthly fee includes free bonus minutes ${tariff.bonusMins} min and includes minutes 
          of onnet, offnet 
        </p> 
        <div><br /></div> 
      </td> 
    </tr> 
  </tbody> 
</table> 
    `;
    return table;
}

function getTariffPlan(company) {
    let tariffPlans = [
        {
            name: "виртуальный 5",
            monthlyFee: "5000",
            kcellActiv: "11",
            cug: "0",
            othermobileoper: "11",
            bonusMins: "555",
        },
        {
            name: "виртуальный 10",
            monthlyFee: "10000",
            kcellActiv: "11",
            cug: "0",
            othermobileoper: "11",
            bonusMins: "1250",
        },
        {
            name: "виртуальный 30",
            monthlyFee: "30000",
            kcellActiv: "11",
            cug: "0",
            othermobileoper: "11",
            bonusMins: "4000",
        },
        {
            name: "виртуальный 50",
            monthlyFee: "50000",
            kcellActiv: "11",
            cug: "0",
            othermobileoper: "11",
            bonusMins: "7000",
        },
        {
            name: "виртуальный 150",
            monthlyFee: "150000",
            kcellActiv: "10.5",
            cug: "0",
            othermobileoper: "

            Ануар, [15.03.2022 12:46]
    10.5",
    bonusMins: "20000",
},
    {
        name: "виртуальный 200",
            monthlyFee: "200000",
        kcellActiv: "10.5",
        cug: "0",
        othermobileoper: "10.5",
        bonusMins: "28751",
    },
    {
        name: "виртуальный 600",
            monthlyFee: "600000",
        kcellActiv: "9",
        cug: "0",
        othermobileoper: "9",
        bonusMins: "85714",
    },
    {
        name: "виртуальный 700",
            monthlyFee: "700000",
        kcellActiv: "9",
        cug: "0",
        othermobileoper: "9",
        bonusMins: "100000",
    },
    {
        name: "виртуальный 1 mln",
            monthlyFee: "1000000",
        kcellActiv: "9",
        cug: "0",
        othermobileoper: "9",
        bonusMins: "142857",
    },
];
    let tariff = {};
    tariffPlans.forEach((tariffPlan) => {
        company.tariff = company.tariff.trim().toLowerCase();

        if (tariffPlan.name === company.tariff) {
            tariff = tariffPlan;
        }
    });
    return tariff;
}