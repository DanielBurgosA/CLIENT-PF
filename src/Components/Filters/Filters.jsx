import {Menu, MenuButton, MenuList, MenuOptionGroup, MenuItemOption, MenuDivider, Button, Box} from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filter, addFilterLocation, addFilterState, orderByAlpha } from "../../Redux/Slicers/projectSlicer";
import style from './Filters.module.css'


export default function Filters ({page}){

    //lógica para conseguir todas las locaciones
    const allProjects = useSelector(state => state.project.AllProjects);
    const searchN = useSelector(state => state.project.projectsSearch);
    const allLocations = new Set();
    allProjects.forEach(project => {allLocations.add(project.location)});
    const locations = Array.from(allLocations);

    //lógica de los filtros
    const filterLocation = useSelector(state => state.project.filterLocation);
    const filterState = useSelector(state => state.project.filterState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filter())
        page(1);
    }, [filterLocation, filterState, searchN, dispatch])
   
    const handlerFLocation = (e) =>{
        dispatch(addFilterLocation(e))
    }

    const handlerFState = (e) =>{
        dispatch(addFilterState(e))
    }

    //logica ordenamiento

    const handlerAlphaOrder = (e) =>{
        dispatch(orderByAlpha(e))
        page(1);
    }

    return(
        <div>
            <Menu closeOnSelect={false } overflow="scroll">
                <MenuButton as={Button} colorScheme='blue' className={style.Buttons}>
                    Order:
                </MenuButton>
                <MenuList minWidth='240px'>
                    <MenuOptionGroup defaultValue='none' type='radio' onChange={handlerAlphaOrder}>
                        <MenuItemOption value='none'>No order</MenuItemOption>
                        <MenuItemOption value='asc'>A-Z</MenuItemOption>
                        <MenuItemOption value='desc'>Z-A</MenuItemOption>
                        <MenuItemOption value='+'>Higher cost</MenuItemOption>
                        <MenuItemOption value='-'>Lower cost</MenuItemOption>
                    </MenuOptionGroup>
                </MenuList>
            </Menu>
            <Menu closeOnSelect={false}>
                <MenuButton as={Button} colorScheme='blue'  className={style.Buttons}>
                    Filter by: 
                </MenuButton>
                <MenuList minWidth='240px' maxWidth='300px'>
                    <MenuOptionGroup title='State' type='checkbox'onChange={handlerFState}>
                        <MenuItemOption value={true} >Completed</MenuItemOption>
                        <MenuItemOption value={false} >In progress</MenuItemOption>
                    </MenuOptionGroup>
                    <MenuDivider />
                    <Box maxHeight='200px' overflowY="scroll">
                        <MenuOptionGroup title='Country' type='checkbox'onChange={handlerFLocation} >
                            {locations.map((location, i)=>{
                                    return <MenuItemOption value={location} key={i}>{location}</MenuItemOption>
                            })}
                        </MenuOptionGroup>
                    </Box>
                </MenuList>
            </Menu>
        </div>
    )
}