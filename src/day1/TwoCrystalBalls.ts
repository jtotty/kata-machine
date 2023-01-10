/**
 * The two crystal ball problem.
 * Given two crystal balls that will break if dropped from a high enough distance,
 * determine the exact spot in which it will break in the most optimized way.
 */
export default function two_crystal_balls(breaks: boolean[]): number {
    /*
        Array with 16 values
        [f,f,f,f,f,f,f,f,f,f,t,t,t,t,t,t]
               ^ start value: sqrt(16) = 4
                       ^ Jump forward 4 (false => continue)
                               ^ Jump forward 4 (true => break)
                       ^ Jump back 4
                       > > > > ^ linearly walk forward at most 4 (true => return)
    */

    // Starting point is sqrt of N (floored)
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));
    let i = jumpAmount;

    // Jump forward by the sqrt(N) and check for breaks (true)
    for(; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    // Jump back by the sqrt of N
    i -= jumpAmount;

    // Linearly walk forward at most the sqrt(N)
    // "j" stops loop after sqrt(N)
    for (let j = 0; j < jumpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
