import {GetStartedService} from '../services/GestStarted.service';
import CbEditor from "@monaco-editor/react";
function GetStarted () {
    const createMarkup = () => {
        return {__html: GetStartedService.content};
    } 
    return (
        <div className="row text-center">
            <div className="col-12">
                <h2> {GetStartedService.title} </h2>
                <p dangerouslySetInnerHTML={createMarkup()}></p>
            </div>
            <div className="col mt-4">
                <h3> {GetStartedService.integration.plainjs.title} </h3>
                <p> {GetStartedService.integration.plainjs.content} </p>
                <CbEditor 
                    height="180px"
                    defaultLanguage="html"
                    theme="vs-dark"
                    defaultValue={GetStartedService.integration.plainjs.maincode}
                />
                <p className="mt-3"> {GetStartedService.integration.plainjs.alternativeContent} </p>
                <CbEditor 
                    height="180px"
                    defaultLanguage="html"
                    theme="vs-dark"
                    defaultValue={GetStartedService.integration.plainjs.alternativecode}
                />
            </div>
        </div>
    )
}
export default GetStarted;