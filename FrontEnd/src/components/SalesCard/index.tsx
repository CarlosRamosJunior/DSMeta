import NotificationButton from "../NotificationButton"
import "./styles.css"

function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text" />
                </div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text" />
                </div>
            </div>

            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show882">ID</th>
                            <th className="show123">DATA</th>
                            <th>VENDEDOR</th>
                            <th className="show882">VISITAS</th>
                            <th className="show882">VENDAS</th>
                            <th>TOTAL</th>
                            <th>NOTIFICAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show882">#01</td>
                            <td className="show123">15/11/2022</td>
                            <td>Cristal</td>
                            <td className="show882">15</td>
                            <td className="show882">73</td>
                            <td>R$ 200.000</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />                                    
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show882">#02</td>
                            <td className="show123">15/11/2022</td>
                            <td>Carlos</td>
                            <td className="show882">15</td>
                            <td className="show882">32</td>
                            <td>R$ 7.000</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />                                    
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show882">#03</td>
                            <td className="show123">15/11/2022</td>
                            <td>Vitória</td>
                            <td className="show882">15</td>
                            <td className="show882">24</td>
                            <td>R$ 5.000</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />                                    
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesCard
