import { rest } from "msv";

export const handlers = [
    rest.get('http://localhost:3030/scoops', (req,res,ctx) => {
        return res(
            ctx.json([
                {
                    name:'choco',
                    imagePath: 'images/choco.png'
                },
                {
                    name:'vanila',
                    imagePath: 'images/vanila.png'
                }
            ])
        )
    });
]