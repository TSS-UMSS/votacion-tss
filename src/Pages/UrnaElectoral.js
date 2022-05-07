import React from 'react'

export default function UrnaElectoral() {
    return (
 
        <div className='table-responsive'>
            <table class="table table-bordered table-hover caption-top">
                <caption>Urna electoral</caption>
                <thead className='table-active'>
                    <tr>
                    <th scope="col">Hash del voto</th>
                    <th scope="col">Elector</th>
                    <th scope="col">Voto</th>
                    <th scope="col">Hash del partido</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Hora</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>793f970c52ded1276b9264c742f19d1888cbaf73</td>
                    <td>99800b85d3383e3a2fb45eb7d0066a4879a9dad0</td>
                    <td>PFC</td>
                    <td>10/05/2022</td>
                    <td>10:00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
  }