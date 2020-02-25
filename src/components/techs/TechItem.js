import React from 'react';
import PropTypes from 'prop-types';
import { deleteTech } from '../../actions/techActions';
import {connect} from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech, deleteTech }) => {
    const onDelete = () => {
        deleteTech(tech.id);
        M.toast({html : `${tech.firstName} ${tech.lastName} has been deleted.`})
    }

    return (
        <li className="collection-item">
            <div>
                {tech.firstName} {tech.lastName}
                <a href="#!" className="secondary-content">
                    <i onClick={onDelete}className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    )
}

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
}

export default connect(null, {deleteTech})(TechItem)
