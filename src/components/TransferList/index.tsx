// import React, { useState, useEffect, useImperativeHandle } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import _ from 'lodash';
// import {
//   Box,
//   Button,
//   Paper,
//   List as MuiList,
//   ListItem as MuiListItem,
//   ListItemIcon,
//   Checkbox,
//   Typography
// } from '@material-ui/core';
// import {
//   KeyboardArrowLeft as LeftIcon,
//   KeyboardArrowRight as RightIcon
// } from '@material-ui/icons';
// import PropTypes from 'prop-types';

// const useStyles = makeStyles(theme => ({
//   box: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   },
//   paper: {
//     overflow: 'auto',
//     minHeight: 300
//   },
//   button: {
//     margin: theme.spacing(1)
//   },
//   buttonBox: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     padding: theme.spacing(1)
//   },
//   leftBox: {
//     flex: 1,
//     // padding: theme.spacing(1),
//     height: '100%'
//   },
//   rightBox: {
//     flex: 1,
//     // padding: theme.spacing(1),
//     height: '100%'
//   },
//   title: {
//     padding: theme.spacing(2)
//   }
// }));

// const Item = props => {
//   const { children } = props;
//   return <Box>{children}</Box>;
// };

// const TransferList = React.forwardRef(({ children, ...props }, ref) => {
//   const classes = useStyles();
//   const [checked, setChecked] = useState([]);
//   const [left, setLeft] = useState([]);
//   const [right, setRight] = useState([]);
//   const [historyLeft, setHistoryLeft] = useState([]);
//   const [historyRight, setHistoryRight] = useState([]);

//   const {
//     leftTitle,
//     rightTitle,
//     leftData,
//     rightData,
//     onTransferToRight,
//     onTransferToLeft,
//     renderItem,
//     getKey
//   } = props;

//   useEffect(() => {
//     const left = not(leftData, rightData);

//     setLeft(left);
//     setRight(rightData);
//     setHistoryLeft(left);
//     setHistoryRight(rightData);
//   }, [leftData, rightData]);

//   const not = (a, b) => {
//     const toReturn = _.differenceWith(a, b, _.isEqual);
//     return toReturn;
//   };

//   const intersection = (a, b) => {
//     const toReturn = _.intersectionWith(a, b, _.isEqual);
//     return toReturn;
//   };

//   let leftChecked = intersection(checked, left);
//   let rightChecked = intersection(checked, right);

//   useImperativeHandle(ref, () => ({
//     moveBack: () => {
//       setLeft(historyLeft);
//       setRight(historyRight);
//     }
//   }));

//   const handleCheck = item => {
//     const newChecked = [...checked];
//     const index = checked.findIndex(row => getKey(row) === getKey(item));
//     if (index === -1) {
//       newChecked.push(item);
//     } else {
//       newChecked.splice(index, 1);
//     }
//     setChecked(newChecked);
//   };

//   const handleCheckedRight = () => {
//     onTransferToRight(leftChecked);
//     setRight(right.concat(leftChecked));
//     setLeft(not(left, leftChecked));
//     setChecked(not(checked, leftChecked));
//   };

//   const handleCheckedLeft = () => {
//     onTransferToLeft(rightChecked);
//     setLeft(left.concat(rightChecked));
//     setRight(not(right, rightChecked));
//     setChecked(not(checked, rightChecked));
//   };

//   const List = props => {
//     const { data } = props;
//     return (
//       <MuiList dense component="div" role="list">
//         {data.map(item => {
//           return (
//             <MuiListItem
//               key={getKey(item)}
//               button
//               role="listitem"
//               onClick={() => handleCheck(item)}
//             >
//               <ListItemIcon>
//                 <Checkbox
//                   edge="start"
//                   color="primary"
//                   checked={
//                     checked.findIndex(row => getKey(row) === getKey(item)) !==
//                     -1
//                   }
//                   tabIndex={-1}
//                   disableRipple
//                 />
//               </ListItemIcon>
//               {renderItem ? renderItem(item) : <Item>{item.nome}</Item>}
//             </MuiListItem>
//           );
//         })}
//       </MuiList>
//     );
//   };

//   return (
//     <Box className={classes.box}>
//       <Box className={classes.leftBox}>
//         <Paper className={classes.paper}>
//           {leftTitle && (
//             <Typography className={classes.title} variant="h6" component="span">
//               {leftTitle}
//             </Typography>
//           )}

//           <List data={left} />
//         </Paper>
//       </Box>
//       <Box className={classes.buttonBox}>
//         <Button
//           variant="outlined"
//           size="small"
//           className={classes.button}
//           onClick={handleCheckedRight}
//           disabled={leftChecked.length === 0}
//           aria-label="move selected right"
//         >
//           <RightIcon />
//         </Button>
//         <Button
//           variant="outlined"
//           size="small"
//           className={classes.button}
//           onClick={handleCheckedLeft}
//           disabled={rightChecked.length === 0}
//           aria-label="move selected right"
//         >
//           <LeftIcon />
//         </Button>
//       </Box>
//       <Box className={classes.rightBox}>
//         <Paper className={classes.paper}>
//           {rightTitle && (
//             <Typography className={classes.title} variant="h6" component="span">
//               {rightTitle}
//             </Typography>
//           )}
//           <List data={right} />
//         </Paper>
//       </Box>
//     </Box>
//   );
// });

// // TransferList.propTypes = {
// //   getKey: PropTypes.func,
// //   rightData: PropTypes.array,
// //   leftTitle: PropTypes.string,
// //   rightTitle: PropTypes.string,
// //   onTransferToRight: PropTypes.func,
// //   onTransferToLeft: PropTypes.func
// // };

// // TransferList.defaultProps = {
// //   getKey: item => item.id,
// //   rightData: [],
// //   leftTitle: '',
// //   rightTitle: '',
// //   onTransferToRight: () => { },
// //   onTransferToLeft: () => { }
// // };

// export default TransferList;

import React from 'react';

// import { Container } from './styles';

const TransferList = () => <div />;

export default TransferList;
