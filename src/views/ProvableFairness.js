import React, { useEffect } from 'react';

const ProvableFairness = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section>
            <div className="wf-section-privacy">
                <div>
                    <h1 className="heading-5">
                        <br/>PROVABLE<br/>FAIRNESS</h1>
                    <p className="paragraph-5">
                        <br/>
                        <br/>
                        To make sure no funny business goes on in the minting period, the tokens will be sorted in the following manner. Additionally no core team members will be allowed to shop tokens on secondary in the pre-reveal period.
                        <br/>
                        <br/>
                        <b>Randomizing the metadata</b>
                        <br/>
                        Sort all tokens by the SHA-256 sum of the GIF itself<br/>
                        Shuffle using Ruby’s Array#shuffle(Random.new(SEED))<br/>
                        Seed is 14264359 (block number at time of shuffle)<br/>
                        Rotate list by community supplied number X (Array#cycle)<br/>
                        11944, the number of BING BONG reactions to this post at time of shuffle.<br/>
                        Generate provenance hash, save to contract<br/>
                        Provenance hash is the SHA-256 of the final order of the all the tokens strung together.<br/>
                        Let list sale be open for 1 hour, then mint 78 tokens in one transaction…<br/>
                        9 (making it 10 with the genesis token #1) for Markus<br/>
                        5 for Nguyen<br/>
                        5 for James<br/>
                        5 for Lucas<br/>
                        5 for coinbilly<br/>
                        5 for nelsg<br/>
                        5 for flex<br/>
                        5 for ash<br/>
                        5 for lost slim<br/>
                        5 for mendez<br/>
                        5 for bread and avocado<br/>
                        5 for mikker<br/>
                        2 for Mads<br/>
                        7 stays in RCC vault<br/>
                        Transferred manually after mint in the order above.<br/>
                        <br/><br/><br/><br/>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProvableFairness;