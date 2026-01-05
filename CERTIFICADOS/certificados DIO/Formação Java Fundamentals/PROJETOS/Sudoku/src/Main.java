import br.com.dio.model.Board;
import br.com.dio.service.BoardService;
import br.com.dio.service.SudokuSolver;
import br.com.dio.util.BoardTemplate;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        Board board = new Board();
        BoardService service = new BoardService();
        SudokuSolver solver = new SudokuSolver();

        while (true) {

            System.out.println(
                    String.format(
                            BoardTemplate.BOARD_TEMPLATE,
                            service.toArray(board)
                    )
            );

            System.out.println("Digite: linha coluna valor | 'solve' | 'exit'");
            String input = scanner.nextLine();

            if (input.equalsIgnoreCase("exit")) {
                break;
            }

            if (input.equalsIgnoreCase("solve")) {
                solver.solve(board);
                continue;
            }

            String[] parts = input.split(" ");

            if (parts.length != 3) {
                System.out.println("Entrada inválida!");
                continue;
            }

            int row = Integer.parseInt(parts[0]);
            int col = Integer.parseInt(parts[1]);
            String value = parts[2];

            if (service.isValidMove(board, row, col, value)) {
                board.setValue(row, col, value);
            } else {
                System.out.println("Jogada inválida!");
            }
        }
    }
}
