package br.com.dio.model;

public class Board {

    private final String[][] board = new String[9][9];

    public Board() {
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                board[i][j] = " ";
            }
        }
    }

    public String[][] getBoard() {
        return board;
    }

    public void setValue(int row, int col, String value) {
        board[row][col] = value;
    }
}
