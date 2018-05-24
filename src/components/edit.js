import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Edit extends Component {
    constructor(props){
        super(props);
        this.showDashboard = this.showDashboard.bind();
    }

    showDashboard() {
        console.log("click here");
        window.location = '/';
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label for="inputTitle">Video Title</label>
                    <input type="text" className="form-control" id="inputTitle" aria-describedby="emailHelp" placeholder="Video Title" />
                </div>
                <div className="form-group">
                    <label for="inputEngTitle">English Title</label>
                    <input type="text" className="form-control" id="inputEngTitle" placeholder="English Title" />
                </div>
                <div className="form-group">
                    <label for="vidDescription">Video Description</label>
                    <textarea className="form-control" id="vidDescription" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="keywords">Keywords</label>
                    <input type="text" className="form-control" id="keywords" />
                </div>
                <div className="form-group">
                    <label for="selChannel">Channel</label>
                    <select className="form-control" id="selChannel">
                        <option>Viral Sach</option>
                        <option>Test 1</option>
                        <option>Test 2</option>
                        <option>Test 3</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="selCategory">Category</label>
                    <select multiple className="form-control" id="selCategory">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="selShow">Select Show</label>
                    <select className="form-control" id="selShow">
                        <option>Viral Sach</option>
                        <option>Test 1</option>
                        <option>Test 2</option>
                        <option>Test 3</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-primary" onClick={this.showDashboard}>Cancel</button>
            </form>
        );
    }
}

export default Edit;
