import React, {Component} from "react";
import helpers from "../../utils/helpers"


class ArticleSearch extends Component {
    handleSubmit(event) {
        alert("it's working!");
        console.log(helpers);
        helpers.startQuery("terms","start", "end");
    };

    render() {
        return (          
               
            
            <div className="row">
                <div className="col-sm-12">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
                        </div>
                        <div className="panel-body">

                            <form onSubmit={this.handleSubmit}>

                                <div className="form-group">
                                    <label htmlFor="search">Search Term:</label>
                                    <input type="text" className="form-control" id="search-term" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="start-year">Start Year</label>
                                    <input type="text" className="form-control" id="start-year" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="end-year">End Year</label>
                                    <input type="text" className="form-control" id="end-year" />
                                </div>

                                <button onClick={this.handleFormSubmit} type="submit" className="btn btn-default" id="run-search"><i className="fa fa-search"></i> Search</button>
                                <button type="button" className="btn btn-default" id="clear-all"><i className="fa fa-trash"></i> Clear Results</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}


export default ArticleSearch;