import '../../App.css';
import Table from 'react-bootstrap/Table';


export default function TableHeader () {

    const tableHeadText = ["Month", "Solar Radiation", "AC Energy (kWh)", "Value"];
    const tableSubheadings = ["", "kw/ m^2 / day", "kWh", "$"];

    const tableHeaders = tableHeadText.map((text, i) => {
    return (<th key={i}> { text } </th> )
});


    return (
    <thead>
        <tr>
        {tableHeaders}
        </tr>
      </thead>


    );
}