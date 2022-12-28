let mode = 1;
createIntialGrid();
document.querySelector('#size_button').addEventListener('input',adjustGrid);
document.querySelector('#eraser_button').addEventListener('click',function(){mode = 0;});
document.querySelector('#color_button').addEventListener('input',function(){mode = 1;});
document.querySelector('#rainbow_button').addEventListener('click',function(){mode = 2;});
document.querySelector('#clear_button').addEventListener('click',clearGrid);

function createIntialGrid()
{
    let container = document.querySelector('.container');
    container.setAttribute('style', `grid-template-columns: repeat(16,1fr); grid-template-rows: repeat(16,1fr)`);
    for(let i=0;i<16*16;i++)
    {
        let grid = document.createElement('div');
        grid.classList.add('grids');
        grid.addEventListener('mouseover',color);
        container.appendChild(grid);
    }
}


function adjustGrid()
{
    deleteGrid();
    let container = document.querySelector('.container');
    let size = document.querySelector('#size_button').value;
    document.querySelector('#value').textContent = size + " x " + size;
    container.setAttribute('style', `grid-template-columns: repeat(${size},1fr); grid-template-rows: repeat(${size},1fr)`);
        for(let i=0;i<size*size;i++)
        {
            const grid = document.createElement('div');
            grid.classList.add('grids');
            grid.addEventListener('mouseover',color);
            container.appendChild(grid);
        }
}


function deleteGrid()
{
    let grids = document.querySelectorAll('.grids');
    for(let i=0;i<grids.length;i++)
    {
        grids[i].remove();
    }
}


function color()
{
    if(mode==1)
    {
        let color = document.querySelector('#color_button').value;
        this.setAttribute('style', `background-color:${color}`);
    }
    else if(mode==0)
    {
        this.setAttribute('style','background-color: white');
    }
    else if(mode==2)
    {
        let random1 = Math.floor(Math.random() * 256);
        let random2 = Math.floor(Math.random() * 256);
        let random3 = Math.floor(Math.random() * 256);
        this.setAttribute('style',`background-color:rgb(${random1},${random2},${random3})`);
    }
}


function clearGrid()
{
    let grids = document.querySelectorAll('.grids')
    {
        for(let i=0;i<grids.length;i++)
        {
            grids[i].setAttribute('style','background-color:white');
        }
    }
}