import { useData_wallet } from './client_data';
export default function () {
    const wallet = useData_wallet()
    // return (
    //     <div className="row" onClick={() => alert('clickable')}>
    //         <div className="col-sm-6 mb-3 mb-sm-0 wallet-container">
    //             <div className="card">
    //                 <div className="card-body">
    //                     <h5 className="card-title">Bank account ending in 5399</h5>
    //                     <p className="card-text">Expires 03/30</p>
    //                     <a href="#" className="btn btn-link">Manage</a>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="col-sm-6 mb-3 wallet-container">
    //             <div className="card">
    //                 <div className="card-body">
    //                     <h5 className="card-title">Amex ending in 0002</h5>
    //                     <p className="card-text">Used for payouts</p>
    //                     <a href="#" className="btn btn-link">Manage</a>
    //                 </div>
    //             </div>
    //         </div>
    //         <br />
    //         <div className="col-sm-6 mb-3 mb-sm-0 wallet-container">
    //             <div className="card">
    //                 <div className="card-body">
    //                     <h5 className="card-title">Bank account ending in 5399</h5>
    //                     <p className="card-text">Expires 03/30</p>
    //                     <a href="#" className="btn btn-link">Manage</a>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="col-sm-6 mb-3 wallet-container">
    //             <div className="card">
    //                 <div className="card-body">
    //                     <h5 className="card-title">Amex ending in 0002</h5>
    //                     <p className="card-text">Expires 03/30</p>
    //                     <a href="#" className="btn btn-link">Manage</a>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
    return (<div className="row" onClick={() => alert('clickable')}>
        {wallet && wallet.map(({ name, expire }, index) => (
            <div className="col-sm-6 mb-3 mb-sm-0 wallet-container" key={index}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{expire}</p>
                        <a href="#" className="btn btn-link">Manage</a>
                    </div>
                </div>
            </div>
        ))}
    </div>)
}