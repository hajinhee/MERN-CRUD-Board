import React from 'react';
import styles from '@/styles/Board.module.css'


export function AddBoard({onChange, onSubmit}) {

    return (
        <section id="contact">
        <div className={styles.board_container}>
        <div className={styles.board_form_container}>
            <div className={styles.right}>
                <form className={styles.form_container} onSubmit={onSubmit}>
                    <h1 >게시글 작성</h1>
                    <input
                        type="text"
                        placeholder="Title *"
                        name="title"
                        onChange={onChange}
                        required
                        className={styles.input}
                    />
                    <input
                        type="text"
                        placeholder="Name *"
                        name="name"
                        onChange={onChange}
                        required
                        className={styles.input}
                    />
                    <input
                        type="text"
                        placeholder="Email *"
                        name="email"
                        onChange={onChange}
                        required
                        className={styles.input}
                    />
                    <input
                        type="text"
                        placeholder="Subject *"
                        name="subject"
                        onChange={onChange}
                        required
                        className={styles.input2}
                    />
                    
                    <button type="submit" className={styles.green_btn}>
                        등록하기
                    </button>
                </form>
            </div>
        </div>
    </div>
      </section>
    );
}