function digital_root(n) {
    if (n < 10) return n
    
    return digital_root(
      n.toString().split('').reduce((sum, d) => sum + Number(d), 0))
  }
  
  console.log(digital_root(16))  // 7
  console.log(digital_root(456))  // 6