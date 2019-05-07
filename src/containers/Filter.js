import {connect} from 'react-redux';
import Filter from '../components/Filter';
import * as actionFilter from '../actions/filter';

console.log(actionFilter.changeSearch)
const mapStateToProps = ({filter}) => ({
    filterBy: filter.filterBy,
})

const mapDispatchToProps = (dispatch) => ({
    changeFilter: (value) => 
        dispatch(
            actionFilter.changeFilter(value)
        ),
    changeSearch: (value) =>
        dispatch(
            actionFilter.changeSearch(value)
        )    

})

export default connect (mapStateToProps, mapDispatchToProps) (Filter)