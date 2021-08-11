import {homeService} from '../services/Home.service';
import coverHome from '../assets/img/ui-cover.png';
function Home() {
    
    return(
        <div className="row">
            <div className="col-md-6">
                <h3> {homeService.title} </h3>
                <p> {homeService.content} </p>
            </div>
            <div className="col-md-6">
                <img src= {coverHome} width="100%" alt="Cover not fround"/>
            </div>
            <div className="col-12 mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <h3> {homeService.support.title} </h3>
                    </div>
                    <div className="col-md-6">
                        <p> 
                        {homeService.support.content}
                        </p>
                        <div className="row">
                            <div className="col">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 mt-4 text-center">
                <h3> {homeService.support.listTitle} </h3>
            </div>
            <div className="col-12 mt-4">
                <table className="table table-dark table-striped">
                    <thead>
                        <tr className="text-center">
                        <th scope="col">Navegador</th>
                        <th scope="col">Soporte</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        homeService.support.broswerList.map((obj, index) => (
                            <tr key={index} className="text-center">
                                <td>{obj.navigator}</td>
                                <td>{obj.detail}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="col-12 mt-4">
                <p>
                    {homeService.support.suggestion}
                    <a className="text-warning" href="https://stenciljs.com/docs/browser-support" target="_blank" rel="noreferrer">
                      <strong>stencil-browser-support</strong>
                    </a>
                </p>
            </div>
        </div>
    );
}
export default Home;