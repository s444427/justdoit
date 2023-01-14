
/** Store functions definition **/

export const mapStateToProps = (state) => {
    return {
        yachts_content: state.yachts_content.data,
        current_yacht: state.current_yacht.data,
    };
};

export const mapDispatchToProps = (dispatch) => {

    return {
        handleChangeYacht: (input) => {
            return dispatch({
                type: "CURRENT_YACHT",
                payload: {data: input},
            });
        },
    }
}