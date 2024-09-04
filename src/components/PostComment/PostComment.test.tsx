import { fireEvent, screen, render } from "@testing-library/react";
import PostComment from ".";

describe('Teste de comentário', () => {
    test('Deve testar a inserção de dois comentários', () => {
        render(<PostComment/>);
        fireEvent.change(screen.getByTestId('campo-digitacao'), {
            target: {
                value: 'Muito bom!'
            }
        })
        fireEvent.click(screen.getByTestId('campo-cadastrar'))
    
        fireEvent.change(screen.getByTestId('campo-digitacao'), {
            target: {
                value: 'Ótimo!'
            }
        })
        fireEvent.click(screen.getByTestId('campo-cadastrar'))
    
        expect(screen.getByText('Muito bom!')).toBeInTheDocument()
        expect(screen.getByText('Ótimo!')).toBeInTheDocument()
    })
})