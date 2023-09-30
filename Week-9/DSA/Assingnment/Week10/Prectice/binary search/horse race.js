function findMaxStrengthHorse(N, K, strengths) {
    function race(groups) {
    if (groups.length === 1) {
    return groups[0].indexOf(Math.max(...groups[0]));
    }
    
    const subgroups = [];
    for (let group of groups) {
    const mid = Math.ceil(group.length / 2);
    subgroups.push(group.slice(0, mid), group.slice(mid));
    }
    
    const results = subgroups.map(subgroup => race([subgroup]));
    const winners = results.map(result => subgroups[result]);
    
    return race([winners]);
    }
    
    const initialGroup = [strengths];
    return race([initialGroup]);
    }
    
    // Test Case 1
    const result1 = findMaxStrengthHorse(5, 2, [4, 2, 7, 5, 1]);
    console.log("Test Case 1:", result1); // Output: 2
    
    // Test Case 2
    const result2 = findMaxStrengthHorse(6, 3, [9, 4, 8, 2, 6, 5]);
    console.log("Test Case 2:", result2); // Output: 0



    let a = [[2,6,42],[2,5,7],[8]]

    console.log(a[1].indexOf(Math.max(...a[1])));