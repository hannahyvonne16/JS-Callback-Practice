const inventory = newInventory()
move(inventory).to(0, 0)

move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)


function move(Element) {
    Element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        Element.style.left = left + 'px'
        Element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, callback){
        let direction = null;
        let x = left;
        let y = bottom;
    
        Element.style.left = x + 'px'
        Element.style.bottom = y + 'px'

        function moveCharacter(){
            if(direction === 'west'){
                x-=1
            }
            if(direction === 'east'){
                x+=1
            }
            if(direction === 'north'){
                y+=1
            }
            if(direction === 'south'){
                y-=1
            }
            character.style.left = x + 'px'
            character.style.bottom = y + 'px'
        }

        setInterval(moveCharacter, 1)

        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
    
            if(e.key === 'a'){
                direction = 'west'
            }
            if(e.key === 'w'){
                direction = 'north'
            }
            if(e.key === 'd'){
               direction = 'east'
            }
            if(e.key === 's'){
                direction = 'south'
            }
            callback (direction)
        })

        document.addEventListener('keyup', function(e){
            direction = null
            callback(direction)
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}

const character = newImage('assets/green-character/static.gif')
move(character).withArrowKeys(100, 250, handleDirectionChange)

function handleDirectionChange(direction){
    if(direction === null){
        character.src = 'assets/green-character/static.gif'
    }
    if(direction === 'west'){
        character.src = 'assets/green-character/west.gif'
    }
    if(direction === 'north'){
        character.src = 'assets/green-character/north.gif'
    }
    if(direction === 'east'){
        character.src = 'assets/green-character/east.gif'
    }
    if(direction === 'south'){
        character.src = 'assets/green-character/south.gif'
    }

}

//setInterval(function() {
//    if(direction === 'west'){
//        x = x - 1
//    }
//    if(direction === 'east'){
//        x = x + 1
//    }
//    if(direction === 'north'){
//        y = y + 1
//    }
//    if(direction === 'south'){
//        y = y - 1
//    }
//    character.style.left = x + 'px'
//    character.style.bottom = y + 'px'
//}, 1)


//document.addEventListener('keydown', function(e){
//    if(e.repeat) return;
//
//    if(e.key === 'a'){
//        direction = 'west'
//    }
//    if(e.key === 'w'){
//        direction = 'north'
//    }
//    if(e.key === 'd'){
//        direction = 'east'
//    }
//    if(e.key === 's'){
//        direction = 'south'
//    }
//})

//document.addEventListener('keyup', function(e){
//    direction = null
//})


