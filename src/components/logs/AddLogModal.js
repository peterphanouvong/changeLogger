import React, {useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLog } from '../../actions/logActions';

const AddLogModal = ({ addLog }) => {
    const [message, setMessage] = useState("");
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState("John Doe");

    const onSubmit = () => {
        if(message === '' || tech === '') {
            M.toast({ html: 'Please enter a message and tech' });
        } else {
            const newLog = {
                message,
                attention,
                tech,
                date: new Date(),
            }

            addLog(newLog);

            M.toast({ html: `Log added by ${tech}`});

            setMessage('');
            setTech('');
            setAttention(false);
        }
    }

    return (
        <div id="add-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                
                    <div className="input-field">
                        <input 
                            type="text" 
                            name="message" 
                            value={message} 
                            onChange={e=> setMessage(e.target.value)}
                        />
                        <label htmlFor="message" className="active">Log Message</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <select 
                            name="tech" 
                            value={tech} 
                            className="browser-default" 
                            onChange={e => setTech(e.target.value)}
                        >
                            <option value="John Doe">John Doe</option>
                            <option value="Sam Smith">Sam Smith</option>
                            <option value="Mary Joe">ZMary Joe</option>
                            <option value="Peter Phanouvong">Peter Phanouvong</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="checkbox" className="filled-in" checked={attention} value={attention} onChange={e => setAttention(!attention)}/>
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
                <div className="modal-footer">
                    <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue btn">Enter</a>
                </div>
            </div>
            
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
}

AddLogModal.propTypes = { 
    log: PropTypes.object.isRequired,
    addLog: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    log: state.log
});

export default connect(mapStateToProps, {addLog})(AddLogModal);
